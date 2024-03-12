import { useEffect, useState } from "react"
import { generateDates } from "../../utils/generate-dates"
import { HabitDay } from "../HabitDay"
import { api } from "../../lib/axios"
import dayjs from "dayjs"

const weekDays = [
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S',
  'D',
]

const summaryDates = generateDates()
const minimumSummarySize = 18 * 7 // 18 weeks
const amountOfDays = minimumSummarySize - summaryDates.length // 18 weeks

type Summary = Array<{
  id: string
  date: string
  amount: number
  completed: number
}>

export function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([])

  useEffect(() => {
    api.get('summary').then(response => {
      setSummary(response.data)
    })
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((wd, index) => {
          return (
            <div 
              key={`${wd}-${index}`} 
              className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
            >
              {wd}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map(date =>  {
          const dayInSummaty = summary.find(day => {
            return dayjs(date).isSame(day.date, 'day')
          })
          return (
            <HabitDay 
              key={date.toString()}
              date={date}
              amount={dayInSummaty?.amount} 
              completed={dayInSummaty?.completed} 
            />
          )
        })}

        {amountOfDays > 0 && Array.from({length: amountOfDays}).map((_, index) => {
          return (
            <div 
              key={index} 
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          )
        })}
      </div>
    </div>
  )
}