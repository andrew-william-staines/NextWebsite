import React from 'react'
import styles from './nav.module.css'

const NavBar = () => {
  return (
    <div className="drawer sticky bg-base-300 top-0 z-50">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className='flex flex-row items-center'>
                        <div className="navbar w-full">
                            <div className="drawer-content">
                                <label htmlFor='my-drawer-3' className="mx-2 flex-1 px-2 font-bold">Soul Society</label>
                            </div>
                            <div className="hidden flex-none lg:block">
                                <ul className="menu gap-8 menu-horizontal">
                                    <li>Shinigami</li>
                                    <li>Enemies</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-8'>
                            <div className="join">
                                <input className="input join-item" placeholder="Search any" />
                            </div>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://wallpapers-clan.com/wp-content/uploads/2022/09/bleach-ichigo-pfp-8.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li className={styles.list}>Society</li>
                        <li className={styles.list}>Shinigami</li>
                        <li className={styles.list}>Enemies</li>
                        <li className={styles.list}>Help</li>
                    </ul>
                </div>
            </div>
  )
}

export default NavBar