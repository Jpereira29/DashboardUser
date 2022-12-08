import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Midea } from "../../types/Midea";
import { Container } from "./styles";

type Props = {
    userId?: number
    formMideaState: boolean
    setFormMideaState: Dispatch<SetStateAction<boolean>>
}

export function Form({ userId, formMideaState, setFormMideaState }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Midea>()
    const onSubmit: SubmitHandler<Midea> = data => console.log(data);

    return (
        <Container formMideaState={formMideaState}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Image alt="close" src="/images/close.png" width={25} height={25} 
                    onClick={()=> setFormMideaState(false)}
                />
                <input 
                    type="text"
                    placeholder="Título"
                    {...register("title", {
                        required: {
                            value: true,
                            message: 'Insira um título.'
                        },
                        maxLength: {
                            value: 30,
                            message: 'Insira um título de até 30 caracteres.'
                        },
                        minLength: {
                            value: 3,
                            message: 'Um título a partir de 3 caracteres. '
                        },
                    })}
                />
                {errors.title && <span>{errors.title?.message}</span>}

                <input
                    type="text"
                    placeholder="Link"
                    {...register("url", {
                        required: {
                            value: true,
                            message: 'Insira um link.'
                        },

                        pattern: {
                            value: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
                            message: "Insira um link válido"
                        }
                    })}
                />
                {errors.url && <span>{errors.url?.message}</span>}

                <input
                    style={{display: 'none'}}
                    type="number"
                    value={userId}
                    {...register("userId")}
                />
    
                <button type="submit" 
                    onClick={()=> (errors.title || errors.url) ?? setFormMideaState(false)}
                >Salvar</button>
            </form>
        </Container>
    )
}