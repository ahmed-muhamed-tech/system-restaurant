type inputProps = {
  name: string;
  type: string;
  placeholder: string;
  icon?: any;
  handleShowPassword?: () => void;
  register: any;
  error?: {
    message?: string;
  };
};
export default function Input({
  icon,
  type,
  placeholder,
  handleShowPassword,
  name,
  register,
  error,
}: inputProps) {
  return (
    <div className="w-full">
      <div className="flex items-center w-full gap-2 bg-bg text-muted rounded-input px-2 lg:px-4 border-2 border-transparent focus-within:border-primary hover:border-primary transition-all duration-200  text-lg">
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1  py-1 lg:py-3 border-2 border-transparent outline-none"
          {...register(name, { required: true })}
        />
        <button type="button" onClick={handleShowPassword}>
          {icon}
        </button>
      </div>
      <span className="block pr-3 mt-1 h-3 animate-pulse text-xs text-accent">
        {error && error.message}
      </span>
    </div>
  );
}
