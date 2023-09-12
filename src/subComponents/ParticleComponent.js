
import React from 'react';
import {useCallback} from "react";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";


import configDark from '../config/particles-config.json'
import configLight from '../config/particles-config-light.json'

const Particle = (props) => {
    // const [loaded, setLoaded] = useState(false);
    // const [particles, setParticles] = useState(null);
    //
    // const load = useCallback(() => {
    //     loadFull().then(setParticles);
    //     setLoaded(true);
    // }, []);
    //
    // return (
    //     <div>
    //         {loaded && particles && <Particles params={particles} />}
    //     </div>
    // );

    const particlesInit = useCallback(async engine => {
        // console.log(engine);

        await loadFull(engine);
    }, []);




    return (
        <Particles
            id='tsparticles'
            init={particlesInit}

            options={props.theme === 'light' ? configLight : configDark}

        />
    )
}

export default Particle