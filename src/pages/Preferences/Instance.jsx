import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Select from "../../components/common/Select";
import { useSelector, useDispatch } from "react-redux";
import { switchInstance } from "../../redux/preference";
const Instance = () => {
    const [instances, setInstances] = React.useState(null);
    const [toggleList, setToggleList] = React.useState(false);
    const instance = useSelector((state) => state.preference.instance);

    const dispatch = useDispatch();
    useEffect(() => {
        if (toggleList) {
            fetchInstances();
        }
    }, [toggleList])

    const fetchInstances =  () => {
        axios.get("https://raw.githubusercontent.com/wiki/TeamPiped/Piped-Frontend/Instances.md")
        .then(resp => resp.data)
        .then(body => {
                var skipped = 0;
                const lines = body.split("\n");
                lines.map(line => {
                    const split = line.split("|");
                    if (split.length > 4) {
                        if (skipped < 2) {
                            skipped++;
                            return;
                        }
                        setInstances(prev => prev ?
                            [...prev,{
                                name: split[0].trim(),
                                apiurl: split[1].trim(),
                                locations: split[2].trim(),
                                cdn: split[3].trim(),
                            }]
                            : [{
                                name: split[0].trim(),
                                apiurl: split[1].trim(),
                                locations: split[2].trim(),
                                cdn: split[3].trim(),
                            }]
                        )
                    }
                })
            })
    }
    return (
        <div className="flex flex-col justify-center items-center h-full"
        onClick={() => {
            setToggleList(true);
        }}
        >

        <Select label="Default Instance">
            <option>
                {instance.name}
            </option>
            {toggleList ?  (instances && instances.map(cur => (
            <option key={cur.name} 
            onClick = {() => {
               dispatch(switchInstance({
                     name: cur.name,
                     url : cur.apiurl,
               }));
               window.location.reload();
            }}            
            >{cur.name}</option>
            )))
            :<span>Loading..</span>
            }
    
        </Select>
        </div>
    );
    }

export default Instance;