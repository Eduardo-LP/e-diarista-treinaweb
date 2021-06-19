import Head from 'next/head'
import SafeEnvironment from 'ui/components//feedback/SafeEnvironment/SafeEnvironment'
import PageTittle from 'ui/components//data-display/PageTittle/PageTittle'

export default function Home() {
  return (
    <div>
      <SafeEnvironment/>
      <PageTittle 
        tittle={"Conheça os profissionais"}
        subtittle={"Preencha seu endereço e veja todos os profissionais da sua localidade"} 
      />
    </div>
  )
}
