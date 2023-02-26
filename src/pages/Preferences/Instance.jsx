import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Select from "../../components/common/Select";
import { setLocal, getLocal } from "../../components/utils/StorageUtils";

const Instance = () => {
    const [instances, setInstances] = React.useState(null);
    const [toggleList, setToggleList] = React.useState(false);

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
            setToggleList(prev => !prev);
        }}
        >

        <Select label="Default Instance"
         
        >
            <option>{getLocal("instanceName") ?? "kavin.rocks"}</option>
            {toggleList ?  (instances && instances.map(instance => (
            <option key={instance.name} 
            onClick = {() => {
                setLocal("instance", instance.apiurl);
                setLocal("instanceName", instance.name);
            }}            
            >{instance.name}</option>
            )))
            :<span>Loading..</span>
            }
    
        </Select>
        </div>
    );
    }

export default Instance;