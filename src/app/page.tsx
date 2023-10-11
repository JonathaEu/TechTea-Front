'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
type Inputs = {
  mensagens: string;
}

export default function Home() {
  const icons = [
    { icon: AiOutlineSend },
  ]
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
    setMensagens(data.mensagens);
  }

  const [mensagens, setMensagens] = useState([]);
  const [mensagensHistory, setMensagensHistory] = useState([]);

  return (
    <>
      <div className="p-4 bg-[#1E64B8]">
        <div className="flex py-6 flex-row rounded-t-xl bg-gradient-to-r from-[#BD8CE6] to-[#4A3276]">
          aa
        </div>

        <div className="flex py-[344px] bg-white">
          MID SECTION
          {/* {mensagens && mensagens.map((message: any) => {
            return (
              <ul>
                <li>
                  {message}
                </li>
              </ul>
            )
          })} */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}
          className=""
        >
          <div className="flex flex-col mt-[] h-20  pb-5
            justify-center border-t-4 border-slate-500 
            ">
            <input type="text"
              className="p-4 relative justify-center w-full
              rounded-b-xl z-10
              "
              {...register('mensagens')}
            />

            <button
              className=" scale-[2] w-8 h-[19px] mt-[2px]
                flex justify-center
               items-center py-[19px] mr-[10px] z-20 absolute
              right-10
              ">
              <AiOutlineSend />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
