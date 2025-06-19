import { Loader } from 'lucide-react'

function Butttons({ isSubmitting, Label }) {
  return (
    <button
      disabled={isSubmitting}
      className="bg-slate-600 text-white p-1 rounded-md">
      {
        isSubmitting
          ? <>
            <Loader className='animate-spin' />
            <p>
              Loading
            </p>
          </>
          : Label
      }</button >
  );
}
export default Butttons;