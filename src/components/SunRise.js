import './SunRise.scss';
import { motion } from "framer-motion"
function SunRise() {
    return (
        <>
            <div className="landscape">
                <div className="mountain"></div>
                <div className="mountain mountain-2"></div>
                <div className="mountain mountain-3"></div>
                <div className="sun-container sun-container-1">
                </div>
                <div className="sun-container">
                    <motion.div className="sun" initial={{ top: '100%' }} animate={{ top: '-100%' }} transition={{ duration: 5 }}></motion.div>
                </div>
                <motion.div className="cloud"></motion.div>
                <motion.div className="cloud cloud-1" initial={{ x: '-50vw' }} animate={{ x: '100vw' }} transition={{ duration: 50 }}></motion.div>
                <div className="sun-container sun-container-reflection">
                    <motion.div className="sun" initial={{ top: '0%' }} animate={{ top: '150%' }} transition={{ duration: 5 }}></motion.div>
                </div>
                <div className="light"></div>
                <div className="light light-1"></div>
                <div className="light light-2"></div>
                <div className="light light-3"></div>
                <div className="light light-4"></div>
                <div className="light light-5"></div>
                <div className="light light-6"></div>
                <div className="light light-7"></div>
                <div className="water"></div>
                <div className="splash"></div>
                <div className="splash delay-1"></div>
                <div className="splash delay-2"></div>
                <div className="splash splash-4 delay-2"></div>
                <div className="splash splash-4 delay-3"></div>
                <div className="splash splash-4 delay-4"></div>
                <div className="splash splash-stone delay-3"></div>
                <div className="splash splash-stone splash-4"></div>
                <div className="splash splash-stone splash-5"></div>
                <motion.div className="lotus lotus-1" style={{ transformOrigin: 'center' }} initial={{ rotate: 0 }} animate={{ rotateX:25}} transition={{ repeat: Infinity, duration: 5, repeatType: "reverse",delay: 3  }}></motion.div>
                <motion.div className="lotus lotus-2" style={{ transformOrigin: 'center' }} initial={{ rotate: 0 }} animate={{ rotateX:30}} transition={{ repeat: Infinity, duration: 5, repeatType: "reverse",delay: 2  }}></motion.div>
                <motion.div className="lotus lotus-3" style={{ transformOrigin: 'center' }} initial={{ rotate: 0 }} animate={{rotateX:20}} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse",delay: 1  }}></motion.div>
                <div className="front">
                    <div className="stone"></div>
                    <motion.div className="grass" style={{ transformOrigin: 'bottom' }} initial={{ rotate: 0 }} animate={{ rotate: 4 }} transition={{ ease: "linear", repeat: Infinity, duration: 5, repeatType: "reverse" }}></motion.div>
                    <motion.div className="grass grass-1" style={{ transformOrigin: 'bottom' }} initial={{ rotate: 0 }} animate={{ rotate: 4 }} transition={{ ease: "linear", repeat: Infinity, duration: 5, repeatType: "reverse" }}></motion.div>
                    <motion.div className="grass grass-2" style={{ transformOrigin: 'bottom' }} initial={{ rotate: 0 }} animate={{ rotate: 8 }} transition={{ ease: "linear", repeat: Infinity, duration: 2, repeatType: "reverse" }}></motion.div>
                    <motion.div className="reed" style={{ transformOrigin: 'bottom' }} initial={{ rotate: 0 }} animate={{ rotate: 4, scaleY: 1.08 }} transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}></motion.div>
                    <motion.div className="reed reed-1" style={{ transformOrigin: 'bottom' }} initial={{ rotate: 0 }} animate={{ rotate: 4 }} transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}></motion.div>
                </div>
            </div>
        </>
    );
}

export default SunRise;
