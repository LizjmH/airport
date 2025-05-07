import { createCrew } from '@/actions/crew'

export default async function crewPage() {
    return (
        <div className='flex h-screen flex-col items-center justify-center text-black'>
            <h1 className='text-3xl font-bold'>Registro de Tripulantes</h1>
            <form
                action={createCrew}
                className='flex flex-col gap-2 bg-white/50 p-5 *:not-[label]:border'
            >
                <label htmlFor=''>Nombre</label>
                <input type='text' name='name' required />

                <input type='submit' />
            </form>
        </div>
    )
}
