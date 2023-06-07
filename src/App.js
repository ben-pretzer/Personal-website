import React from 'react';
import '../styles.css'
import resume from '../documents/Resume.pdf'
import presentation from '../documents/BERT Presentation_ 2023 SRNT.pdf'

const App = () => {
  return (
    <body className='bg-amber-700 leading-relaxed text-slate-300'>
    <div className="mx-auto max-w-screen-xl px-6 py-12 font-poppins md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className='lg:flex lg:justify-between lg:gap-4'>
      <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20'>
		<div>
      	<h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl">Ben Pretzer</h1>
      	<h2 className='text-xl font-medium tracking-tight text-slate-200 mt-3 sm:text-lg'> Software Engineer </h2>
     	 <p className="mt-4 max-w-sm leading-normal text-sm">
      	I am a recent graduate from the University of Texas in Austin with an Electrical and Computer Engineering degree
		following the Software Development track, focused on building modern and accessible software solutions.
      </p>
	  	</div>
		<div>
		<p className="ml-1 mt-2 mb-4 max-w-xs leading-normal text-sm">
      	This website was custom built using React and Tailwind CSS. Links to my social media and resume can be found below.
      </p>
      <ul className='ml-1 mt-2 mb-2 flex items-center'>
			{/* LinkedIn */ }
        <li className='mr-10 text-xs'>
          <a className='block hover:text-slate-200' href="https://linkedin.com/in/ben-pretzer" target='_blank' rel="noreferrer">
            <svg xmlns='http://w3.org/2000/svg' fill='currentColor' className='h-8 w-8' viewBox='0 0 24 24'>
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>
			{/* GitHub */ }
        <li className='mr-10 text-xs'>
          <a className='block hover:text-slate-200' href="https://github.com/ben-pretzer" target='_blank' rel="noreferrer">
            <svg xmlns='http://w3.org/2000/svg' fill='currentColor' className='h-8 w-8' viewBox='0 0 16 16'>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>
			{/* Resume */ }
        <li className='mr-10 text-xs'>
          <a className='block hover:text-slate-200' href={resume} target='_blank'>
            <svg fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" target='_blank' 
              viewBox="0 0 480 480" className='h-8 w-8'>
            <g>
	            <g>
		            <path d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40
			h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80
			C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72
			c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64
			c0,4.424,3.584,8,8,8h64V384z"/>
	            </g>
            </g>
<g>
	<g>
		<path d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48
			z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8
			S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44
			c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96
			V160z"/>
	</g>
</g>
<g>
	<g>
		<rect x="248" y="72" width="40" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="248" y="104" width="48" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="312" y="104" width="40" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="248" y="136" width="104" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="144" y="200" width="64" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="224" y="200" width="48" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="288" y="200" width="80" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="232" width="64" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="192" y="232" width="128" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="336" y="232" width="32" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="264" width="32" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="160" y="264" width="96" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="272" y="264" width="96" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="296" width="32" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="160" y="296" width="96" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="272" y="296" width="96" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="328" width="72" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="200" y="328" width="112" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="360" width="32" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="160" y="360" width="136" height="16"/>
	</g>
</g>
			</svg>
		</a>
      	</li>
      </ul>
	</div>
      </header>
	  <main className='pt-24 lg:w-1/2 lg:py-20'>
		<section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>			
			<div>
			<h2 className='text-sm font-bold uppercase tracking-widest text-slate-300'> About me </h2>
				<p className='mt-4'> In 2018, I applied to the University of Texas at Austin, knowing I wanted to pick a major that 
					would allow me to work on and with interesting technologies. So, with no prior coding experience, 
					I applied for the Electrical Engineering program. Upon acceptance into the program, I fell in love with
					the breadth and functionality of Software Engineering, and discovered my passion for using technology to 
					deliver innovative solutions to challenging problems.
				</p>
				<p className='mt-2'>
					Since that first semester, I have had the opportunity to work on projects that required me to develop different skills,
					use new technologies and learn many coding languages, from C / C++ to Python. 
					Most recently, I worked with a research team from Yale's School of Medicine and a Professor from the UT Moody School of 
					Journalism and Media on a federally funded research grant studying the use of e-cigarettes on social media, 
					and most notably TikTok. 
				</p>
				<p className='mt-2'>
					Apart from Software Engineering, I have a deep interest in the financial markets
					and graduated with a Business Minor from the McCombs School of Business. 
				</p>
				<p className='mt-2'>
					I am currently looking for an opportunity to further my skills, solve interesting problems and 
					make an impact in a company. I look forward to hearing from you soon!
				</p>
			</div>
		</section>

		<section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
			<h2 className='text-sm font-bold uppercase tracking-widest text-slate-300 mb-8'> Projects </h2>
				<div>
					<ul>
						<li className='mb-12'>
							<div className='relative group grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4
											lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
								<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-800/100">
									<div className='z-10 sm:order-2 sm:col-span-6'>
										<h3>
											<a className='inline-flex items-baseline font-medium leading-tight text-slate-300 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base' href={presentation} target='_blank'>
												BERTopic Study Results
											</a>
										</h3>
										<p className='mt-2 text-sm leading-normal'> View the results of the BERTopic analysis, where machine learning was used to identify common themes of e-cigarette 
																					related content on TikTok. This presentation was presented at SRNT (Society for Research on Nicotine and Tobacco) 2023 in San Antonio, Texas. 
										</p>
										<ul className='mt-2 flex flex-wrap'>
											<li className='mr-1.5 mt-2'>
												<div className='flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
													React
												</div>
											</li>
											<li className='mr-1.5 mt-2'>
												<div className='flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
													BERTopic
												</div>
											</li>
											<li className='mr-1.5 mt-2'>
												<div className='flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
													Python
												</div>
											</li>
											<li className='mr-1.5 mt-2'>
												<div className='flex items-center rounded-full bg-teal-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
													Data analysis
												</div>
											</li>
										</ul>				
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
		</section>
	  </main>
      </div>
	

      </div>
    </body>
  );
};

export default App;