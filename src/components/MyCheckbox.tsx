import './index.css';

const MyCheckbox = (props: any) => {
  return (
    <input
      type='checkbox'
      className='checkbox'
      {...props}
    />
  )
}

export default MyCheckbox;