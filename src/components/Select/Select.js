import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Select.css';
let datajj = require('../../csvjsonAll.json');

export default function BasicSelect() {
    const [items, setItems] = useState('')
    const [selectedValue, setSelectedValue] = useState('');
    const [itemAfter, setItemAfter] = useState([]);

    const formatJson = () => {
        let retVal = [];
        for (const key in datajj) {
            const data = { number: datajj[key].cart, data: [datajj[key].data] }
            retVal.push(data);
        }
        const ddd = retVal.map((item) => {
            const retVal = []
            const id = item.number;
            const data = item.data;
            retVal.push(id, data)
            return retVal
        })
        return ddd;
    }

    function formatData(data) {
        const mergedArr = [];
        if (data) {
            for (let i = 0; i < data.length; i++) {
                const id = data[i][0];
                const str = data[i][1][0];
                const existingObj = mergedArr.find(obj => obj.id === id);

                if (existingObj) {
                    existingObj.data.push(str);
                } else {
                    mergedArr.push({ id, data: [str] });
                }
            }
            const lior = mergedArr.map(obj => obj.data);
            return lior;
        }
    }
    const transactions = formatData(formatJson());

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setItemAfter('');
    };

    function calcData(data, itemToSearch) {
        console.log('------------------start---------------------------')
        
        setItemAfter('');
        if (Array.isArray(data)) {
            // Calculate the support for each itemset
            let support = {};
            const minSupport = 0.06; // Minimum support threshold
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].length; j++) {
                    if (support[data[i][j]]) {
                        support[data[i][j]] += 1;
                    } else {
                        support[data[i][j]] = 1;
                    }
                }
            }

            // Calculate the confidence for each rule
            let confidence = {};
            var minConfidence = minSupport; // Minimum confidence threshold

            for (var item in support) {
                let itemset = [item];
                confidence[itemset] = {};
                for (let i = 0; i < data.length; i++) {
                    if (data[i].indexOf(item) >= 0) {
                        for (var j = 0; j < data[i].length; j++) {
                            if (data[i][j] !== item) {
                                var itemset2 = [item, data[i][j]];
                                if (confidence[itemset][itemset2] === undefined) {
                                    confidence[itemset][itemset2] = 1;
                                } else {
                                    confidence[itemset][itemset2] += 1;
                                }
                            }
                        }
                    }
                }


                for (let itemset2 in confidence[itemset]) {
                    const s = support[itemset2.split(",")[0]];
                    const c = confidence[itemset][itemset2] / support[item];

                    if (itemset[0] === itemToSearch) {
                        if (c >= minConfidence) {
                            const myString = itemset2;
                            const myNewString = myString.replace(`${itemToSearch}`, "").replace(',', '');
                            const newData = {
                                name: myNewString,
                                support: s,
                                confidence: c,
                            }

                            setItemAfter((prev) => [...prev, newData]);
                        }
                    }
                }
            }
        } else {
            console.log('there is no data')
        }
        console.log('------------------end---------------------------')
    }

    function generateElmToRender(arrayToLoopOn) {
        let retVal = [];
        arrayToLoopOn.forEach((elm) => {
            let conf = String(elm.confidence).slice(0, 6);
            retVal.push(<div id='nameCondifenceItem'key={elm.name && elm.confidence}>
                <p className='myItem'> &nbsp;שם פריט: &nbsp;</p> {elm.name} <p className='myItem'> &nbsp;| רמת ביטחון: &nbsp;</p> {conf}
            </div>)
        })
        return retVal;
    }

    useEffect(() => {
        setItems(Array.from(new Set(transactions.flat())));
        if (selectedValue.length >= 2) {
            calcData(formatData(formatJson()), selectedValue)
        }

    }, [selectedValue, setSelectedValue, setItemAfter])

    return (
        <Box sx={{ minWidth: 120 }}> לחץ/י כאן כדי לבחור את המוצר שלו תרצה למצוא מוצר משלים
            <div> 
                {items.length >= 2 ? <>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 320 }} >
                        <Select
                            labelId="simple-select-standard-label"
                            id="simple-select-standard"
                            value= {selectedValue}
                            onChange={handleChange}
                            label="Selected Value"   
                            sx={{
                                "& .MuiSvgIcon-root": {
                                  right: "unset",
                                  left: "7px"
                                },
                              }}
                        >
                            {
                                items.map((elm) => {
                                    return <MenuItem value={elm} key={elm}>{elm}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </> : <></>
                }
            </div>
            <br />
            <div>
                {itemAfter.length >= 1 ? generateElmToRender(itemAfter.sort((a, b) => b.confidence - a.confidence)) : <></>}
            </div>
        </Box>

        
    );
}