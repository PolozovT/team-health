import './index.css';

const MyButton = (props: any) => {
  return (
    <button
      className='MyButton'
      {...props}
    />
  )
}

export default MyButton;