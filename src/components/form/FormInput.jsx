function FormInput({name,register}) {
  return (
    <input
      className="border w-full rounded-md border-yellow-400 p-1 px-4 text-white"
      placeholder={name}
      {...register(name)}
      />
  )
}
export default FormInput