import Title from '../components/Title'
import FormProgress from '../components/formProgress'
import Form from '../components/Form'

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Title
          size="text-xl text-center  uppercase extrabold"
          text="Get a free quote"
        />
        <div className="mx-auto max-w-5xl">
          <FormProgress />
        </div>
        <Form />
      </div>
    </>
  )
}
