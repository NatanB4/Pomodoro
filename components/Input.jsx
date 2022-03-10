import { useState } from 'react'

export default function useInput(type) {
    const [value, setValue] = useState("");
    const input = <input value={value} placeholder='Coloque uma tarefa aqui' onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
}
