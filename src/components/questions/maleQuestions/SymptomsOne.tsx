type Props = {}

export default function SymptomsOne({}: Props) {
  return (
    <div>
      <div className='chat chat-start mt-10'>
        <div className='chat-bubble bg-slate-300 text-gray-200 '>
          There will be a few questions about your symptoms
        </div>
      </div>
      <div className='chat chat-end mt-4'>
        <div className='chat-bubble text-gray-200 bg-blue-600'>
          More answers will given to you for a more accurate result
        </div>
      </div>
    </div>
  )
}
