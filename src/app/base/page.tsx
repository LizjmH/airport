import { createBase } from '@/actions/base'

export default async function BasePage() {
    return (
        <div className='flex h-screen flex-col items-center justify-center text-black'>
            <h1 className='text-3xl font-bold'>Registro de la base</h1>
            <form
                action={createBase}
                className='flex flex-col gap-2 bg-white/50 p-5 *:not-[label]:border'
            >
                <label htmlFor=''>Nombre</label>
                <input type='text' name='name' required />
                <label htmlFor=''> Codigo </label>
                <input type='text' name='code' required />
                <input type='submit' />
            </form>
        </div>
    )
}
