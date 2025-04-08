type HourDisplayProps = {
  precipitation: string;
  probability: string;
  gradient: string;
  time: string;
};

export default function OneHourForecast({
  precipitation,
  probability,
  gradient,
  time,
}: HourDisplayProps) {
  return (
    <div
      className={`p-[2px] border-2 border-solid rounded-md border-cyan-100 grid grid-cols-2 grid-rows-3 text-sm ${gradient}`}
    >
      <div className="text-left">{precipitation}</div>
      <div className="text-right">{probability}</div>

      <div className="flex col-span-2 items-end justify-center font-bold">
        {time}
      </div>
    </div>
  );
}
