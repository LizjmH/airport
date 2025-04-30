import { createairplane } from '@/actions/airplane'
import { db } from '@/lib/db'

export default async function airplanePage() {
    const bases = await db.base.findMany()
    return (
        <div>
            <div className='flex h-screen flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold'>Registro de aviones</h1>
                <form
                    action={createairplane}
                    className='flex flex-col gap-2 *:not-[label]:border'
                >
                    <label htmlFor=''> Codigo </label>
                    <input type='text' name='code' required />

                    <label htmlFor=''>Base de mantenimiento</label>
                    <select name='base_id' id=''>
                        {bases.map(base => (
                            <option key={base.id} value={base.id}>
                                {base.name}
                            </option>
                        ))}
                    </select>

                    <input type='submit' />
                </form>
            </div>
        </div>
    )
}
