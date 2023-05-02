import Particles from 'react-tsparticles'
import particleConfig from '../config/particle-config'

function ParticleBackground(){
    return (
        <Particles params={particleConfig} />
    )
}

export default ParticleBackground