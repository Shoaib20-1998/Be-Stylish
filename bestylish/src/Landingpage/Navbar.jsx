import React from 'react'
import styles from './Css/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WithSubnavigation from './Chakracomp/Navchakra'
import Main from './Main'
export default function Navbar() {
    return (
        <>

            <div className={styles.Nav}>
                <div className={styles.TopNav}>
                    <div className={styles.SubTopNav}>
                        <div>
                            <button>Free Shipping</button>
                            <button>Click & Collect</button>
                            <button>Return To Store</button>
                        </div>
                        
                        <div>
                            <button>Download Our Apps</button>
                            <button>Store Loactor</button>
                            <button>Help</button>
                        </div>
                    </div>
                </div>
                <div style={{width:"80%",margin:"auto",cursor:"pointer"}}>
                    <WithSubnavigation />                   
                </div>
                
            </div>

        </>
    )
}
