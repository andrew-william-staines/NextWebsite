import React from 'react'
import NavBar from './components/nav'
import Link from 'next/link'

const Home = () => {
    return (
        <>
            <NavBar />
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/soul-society.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">こんにちは</h1>
                        <p className="mb-5">
                            The Human World and Soul Society are parallel to each other and are two sides of the same coin; while the exact starting point of humanity in the Human World is unknown, Soul Society itself is over a million years old
                        </p>
                        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2F2N3p2M3MxOGo1Y2M1MTVwbzBkdWxrYzE3cTdyMWo2M2tnZmRqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PydTF0pQ11Sawhd3uE/giphy.gif" alt="scroll" className='w-12 mx-auto' />
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Bleach_Thousand-Year_Blood_War.png/250px-Bleach_Thousand-Year_Blood_War.png"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Thousand Years of Blood War!</h1>
                        <p className="py-6">
                            Bleach: Thousand-Year Blood War (BLEACH 千年血戦篇, Burīchi: Sennen Kessen-hen), also known as Bleach: The Blood Warfare, is a Japanese anime television series based on Tite Kubo's manga series Bleach and a direct sequel to its predecessor anime series of the same name. In March 2020
                        </p>
                        <Link href="https://hianimez.to/bleach-thousand-year-blood-war-arc-15665" target='blank' className="btn btn-primary">Watch Online</Link>
                    </div>
                </div>
            </div>
            <div>
            <h1 className='text-4xl mb-24 font-bold text-center'>Our Shows</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2004-2005</time>
                            <div className="text-lg font-black">Substitute Shinigami & Soul Society Arcs</div>
                            Ichigo becomes a Soul Reaper, and with the help of his friends, he infiltrates Soul Society to rescue Rukia, uncovering Aizen’s betrayal and the secrets of Soul Society.
                            <br />
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">2007-2008</time>
                            <div className="text-lg font-black">Arrancar & Hueco Mundo Arcs</div>
                            Aizen’s Arrancar army attacks, and Ichigo and his friends venture into Hueco Mundo to rescue Orihime, facing powerful foes like the Espadas. The battles intensify as Ichigo unlocks his inner Hollow.
                            <br />
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2009</time>
                            <div className="text-lg font-black">Fake Karakura Town Arc</div>
                            The final battle with Aizen takes place in a replica Karakura Town. Ichigo and the Soul Reapers face Aizen’s forces in an epic showdown.
                            <br />
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">2011</time>
                            <div className="text-lg font-black">Fullbring Arc (The Lost Agent Arc)</div>
                            After losing his Soul Reaper powers, Ichigo regains new abilities through Fullbring and faces the mysterious group, Xcution, who have their own dark agenda.
                            <br />
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2022 (Part 1)</time>
                            <div className="text-lg font-black">Thousand-Year Blood War Arc</div>
                            The Quincy empire declares war on Soul Society, unleashing devastation. Ichigo learns more about his origins and faces his most powerful enemies yet.
                            <br />
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-12 mt-12 justify-center items-center">
                <h1 className='text-2xl font-bold text-center'>FAQs</h1>
                <div className="join join-vertical w-5/6 bg-base-100">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-semibold">Who are Shinigami?</div>
                        <div className="collapse-content text-sm">Shinigami in Bleach are spiritual beings who protect the living world and guide souls to the afterlife, known as Soul Society. Their primary role is to fight Hollows, evil spirits that threaten both the living and the dead. Each Shinigami wields a Zanpakuto, a powerful sword with unique abilities. They are organized into 13 Court Guard Squads in Soul Society, with each squad having specific duties. Notable Shinigami include Ichigo Kurosaki, Rukia Kuchiki, and Kisuke Urahara, who play key roles throughout the series.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">Who are Quincy?</div>
                        <div className="collapse-content text-sm">Quincy in Bleach are a group of human spiritual beings who can manipulate spiritual energy, specifically Reishi, to fight against Hollows. Unlike Shinigami, they don’t use swords but instead create spiritual bows to shoot energy arrows. Quincy’s goal is to eliminate Hollows, but their methods often involve destroying the soul entirely, which is in direct conflict with Shinigami, who purify souls.</div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-semibold">What is Soul Society?</div>
                        <div className="collapse-content text-sm">Soul Society in Bleach is the afterlife realm where the souls of deceased humans reside. It is divided into two main areas: the Rukongai, where the majority of souls live in various districts, and the Seireitei, the central area where the Soul Reapers (Shinigami) reside. The Soul Society serves as a place of rest for souls and is governed by the Central 46 Chambers and protected by the Gotei 13, a group of elite Shinigami.</div>
                    </div>
                </div>
            </div>
            <footer className="footer mt-12 sm:footer-horizontal bg-slate-600 text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </nav>
            </footer>
        </>
    )
}

export default Home