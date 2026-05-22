export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      
      <div className="absolute -top-10 right-[-5%] h-32 w-[40%] rounded-full bg-blue-200/50 blur-2xl dark:bg-blue-900/20" />

      <div className="absolute top-[30%] right-[10%] h-24 w-[30%] rounded-full bg-blue-200/40 blur-2xl dark:bg-blue-900/20" />

      <div className="absolute bottom-10 left-[-5%] h-28 w-[35%] rounded-full bg-blue-200/40 blur-2xl dark:bg-purple-900/20" />

      <div className="absolute top-[20%] left-[20%] h-20 w-[25%] rounded-full bg-blue-100/50 blur-2xl dark:bg-blue-900/10" />
    </div>
  );
}
