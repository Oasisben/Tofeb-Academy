interface Props {
    tag: string
    title: string
    subtitle?: string
    center?: boolean
    light?: boolean
  }
  
  export default function SectionHeader({ tag, title, subtitle, center = false, light = false }: Props) {
    return (
      <div className={`mb-12 ${center ? 'text-center mx-auto' : ''}`}>
        <span className={`text-sm font-semibold tracking-widest uppercase ${light ? 'text-blue-300' : 'text-blue-600'}`}>
          {tag}
        </span>
        <h2 className={`font-jakarta text-3xl md:text-4xl font-bold mt-2 leading-tight ${light ? 'text-white' : 'text-[#0a1628]'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-3 text-lg max-w-xl leading-relaxed ${light ? 'text-blue-200' : 'text-gray-500'} ${center ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </div>
    )
  }