type DateDisplayProps = {
  date: Date;
};

export default function DateDisplay({ date }: DateDisplayProps) {
  return (
    <h2 className="flex justify-center items-end h-auto text-lg pb-2">
      {date.toLocaleDateString()}
    </h2>
  );
}
