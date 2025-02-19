const Header = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="w-5 h-10 bg-red-500 rounded-md" />
        <h3 className="text-base font-semibold text-[red]">Featured</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-8">
          <h1 className="text-4xl font-semibold">New Arrival</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
