import React from 'react'
import SheetMobile from './SheetMobile';

function NavbarMobile() {

    const [open, setOpen] = React.useState(false);

    return (
        <aside className='fixed border-b-1 border-neutral-500 top-0 left-0 right-0 h-16  bg-blend-luminosity text-3xl flex justify-between items-center px-6 py-3 z-50 backdrop-blur-md '>
            <section id='logo' className='font-extrabold flex items-center gap-4 gradient-text text-black dark:text-white '>
                <img src="/grp1.png" loading='lazy' alt="group 1" className='' height={40} width={40} /> DEV
            </section>
            <section id='Menu' className='dark:text-white text-black'>
                <SheetMobile open={open} setOpen={setOpen} />
            </section>
        </aside>
    )
}

export default NavbarMobile
