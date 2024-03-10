import * as Checkbox  from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";

const avaliableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  function createNewHabit(e:FormEvent) {
    e.preventDefault()

    console.log(title, weekDays)
  }

  function handleToggleWeekDay(weekDay: number) {
    if(weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)

      setWeekDays(weekDaysWithRemovedOne)

    } else {

      const weekDaysWithAddOne = [...weekDays, weekDay]
      setWeekDays(weekDaysWithAddOne)

    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight mb-5">
        Qual seu comprometimento?
      </label>

      <input 
        type="text" 
        id="title"
        placeholder="ex.: Exerício, dormir bem, etc..."
        className="p-4 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
        onChange={e => setTitle(e.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className='mt-3 flex flex-col gap-2'>
        {
          avaliableWeekDays.map((weekDay, index) => (
            <Checkbox.Root 
              key={weekDay} 
              className='flex items-center gap-3 group'
              onCheckedChange={() => handleToggleWeekDay(index)}
            >
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check size={20} className='text-w' />
                </Checkbox.Indicator>
              </div>
              <span className='text-white leading-tight'>
                {weekDay}
              </span>
            </Checkbox.Root>
          ))
        }
      </div>

      

      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}