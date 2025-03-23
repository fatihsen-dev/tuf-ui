import Button from "./components/Button";

export default function App() {
   return (
      <div className='h-screen p-5 flex flex-col gap-6'>
         <div className='flex items-center gap-2'>
            <Button theme='primary' size='lg'>
               Button
            </Button>
            <Button theme='secondary' size='lg'>
               Button
            </Button>
            <Button theme='accent' size='lg'>
               Button
            </Button>
            <Button theme='destructive' size='lg'>
               Button
            </Button>
            <Button theme='success' size='lg'>
               Button
            </Button>
            <Button theme='warning' size='lg'>
               Button
            </Button>
            <Button theme='ring' size='lg'>
               Button
            </Button>
         </div>
         <div className='flex items-center gap-2'>
            <Button theme='primary' size='md'>
               Button
            </Button>
            <Button theme='secondary' size='md'>
               Button
            </Button>
            <Button theme='accent' size='md'>
               Button
            </Button>
            <Button theme='destructive' size='md'>
               Button
            </Button>
            <Button theme='success' size='md'>
               Button
            </Button>
            <Button theme='warning' size='md'>
               Button
            </Button>
            <Button theme='ring' size='md'>
               Button
            </Button>
         </div>
         <div className='flex items-center gap-2'>
            <Button theme='primary' size='sm'>
               Button
            </Button>
            <Button theme='secondary' size='sm'>
               Button
            </Button>
            <Button theme='accent' size='sm'>
               Button
            </Button>
            <Button theme='destructive' size='sm'>
               Button
            </Button>
            <Button theme='success' size='sm'>
               Button
            </Button>
            <Button theme='warning' size='sm'>
               Button
            </Button>
            <Button theme='ring' size='sm'>
               Button
            </Button>
         </div>
         <div className='flex items-center gap-2'>
            <Button theme='primary' size='icon'>
               <Icon />
            </Button>
            <Button theme='secondary' size='icon'>
               <Icon />
            </Button>
            <Button theme='accent' size='icon'>
               <Icon />
            </Button>
            <Button theme='destructive' size='icon'>
               <Icon />
            </Button>
            <Button theme='success' size='icon'>
               <Icon />
            </Button>
            <Button theme='warning' size='icon'>
               <Icon />
            </Button>
            <Button theme='ring' size='icon'>
               <Icon />
            </Button>
         </div>
         <div className='flex items-center gap-2'>
            <Button theme='primary' size='lg' variant='outline'>
               Button
            </Button>
            <Button theme='destructive' size='lg' variant='outline'>
               Button
            </Button>
            <Button theme='success' size='lg' variant='outline'>
               Button
            </Button>
            <Button theme='warning' size='lg' variant='outline'>
               Button
            </Button>
            <Button theme='ring' size='lg' variant='outline'>
               Button
            </Button>
         </div>
         <div className='flex items-center gap-2'>
            <Button theme='primary' size='icon' variant='outline'>
               <Icon />
            </Button>
            <Button theme='destructive' size='icon' variant='outline'>
               <Icon />
            </Button>
            <Button theme='success' size='icon' variant='outline'>
               <Icon />
            </Button>
            <Button theme='warning' size='icon' variant='outline'>
               <Icon />
            </Button>
            <Button theme='ring' size='icon' variant='outline'>
               <Icon />
            </Button>
         </div>
      </div>
   );
}

const Icon = () => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width='24'
         height='24'
         viewBox='0 0 24 24'
         fill='none'
         stroke='currentColor'
         strokeWidth='2'
         strokeLinecap='round'
         strokeLinejoin='round'
         className='lucide lucide-x'>
         <path d='M18 6 6 18' />
         <path d='m6 6 12 12' />
      </svg>
   );
};
