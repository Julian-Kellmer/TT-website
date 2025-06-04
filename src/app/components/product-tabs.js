import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../ components/ui/tabs'

export function ProductTabs({ descSpecs }) {
  return (
    <Tabs
      defaultValue={descSpecs?.[0]?.title.toLowerCase() || ''}
      className=' h-full  w-full justify-between flex flex-col'>
      <TabsList className={` flex flex-wrap w-full justify-start`}>
        {descSpecs.map((item) => (
          <TabsTrigger
            key={item.title}
            value={item.title.toLowerCase()}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {descSpecs.map((item) => (
        <TabsContent
          key={item.title}
          value={item.title.toLowerCase()}
          className='p-4 border  rounded-md mt-2'>
          <p className='text-sm text-gray-700'>{item.desc}</p>
        </TabsContent>
      ))}
    </Tabs>
  )
}
