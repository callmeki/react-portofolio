import DataImage from"./data";
import{listTools, listProyek} from './data';

function App() {
 

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
       <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="HeroImage" className="w-10 rounded-md"/>
          <q>Tahap awal adalah proses paling sulit dari sebuah perjalanan proses menuju kesuksesan.😁</q>
        </div>
        <h1 className="text-2xl/tight font-bold mb-6">Hallo there, I'am Rizki Fernando</h1>
        <p className="text-base/1oose mb-6 opacity-70">
          Introduce myself as an aspiring UI designer. While I may still be early in my career, I am dedicated 
          to delivering high-quality results. I am looking for an 
          opportunity to build my experience and portfolio, and I’m willing to offer my skills at a competitive rate. 
          If you’re seeking a passionate and detail-oriented designer who’s eager to grow, I’d love to be part of your team. 
          Thank you!
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i>

          </a>
          <a href="#"className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Project <i className="ri-arrow-down-line ri-lg"></i></a>
        </div> 
       </div>
       <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" /> 
     </div>

     {/*tentang*/}
     <div className="tentang mt-32 py-10">
       <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
        <img src={DataImage.HeroImage} alt="image"className="w-12 rounded-md mb-10 sm:hidden" />
        <p className="text-base/loose mb-10">
          Hi, perkenalkan saya adalah seorang UI/UX Designer, sebagai seorang UI/UX Designer yang 
          berfokus pada menciptakan pengalaman digital yang memikat, saya memiliki kemampuan dalam merancang 
          antarmuka yang tidak hanya indah secara visual, tetapi juga intuitif dan fungsional. Saya terampil 
          dalam menerjemahkan ide-ide menjadi desain yang responsif dan ramah pengguna, serta mampu memahami 
          kebutuhan pengguna dan menggabungkannya dengan solusi kreatif.   
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md sm:block
          hidden" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                45 <span className="text-violet-500">+</span>
              </h1 >
              <p>Project</p>
            </div>
             <div>
              <h1 className="text-4xl mb-1">
                4 <span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
          </div>
       </div>
       
       <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Tools yang digunakan</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base /loose opacity-50">Berikut ini beberapa tools 
        yang biasa saya gunakan untuk pembuatan Desain</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.map(tool => (
        <div className="flex items-center gap-2 p-3 border-zinc-600 rounded-md
          hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bgz-inc-900" />
            <div>
              <h4 className="font-bold">
                {tool.nama}
              </h4>
              <p className="opacity-50">
                {tool.ket}
              </p>
            </div>
          </div>
          ))}

          
        </div>
       </div>
     </div>
     {/*Tentang */}

     {/*Project */}
     <div className="project mt-32 py-10">
      <h1 className="text-center text-4xl font-bold mb-2 ">Project</h1>
      <p className="text-base/loose text-center opacity-50">Berikut ini beberapa project yang telah saya buat </p>
      <div className="proyek-box mt-14 grid grid-cols-3 gap-4">
       {listProyek.map(proyek => (
        <div key={proyek.id}>
          <img src={proyek.gambar} alt="Proyek Image" />
          <div>
            <h1>{proyek.nama}</h1>
            <p>{proyek.desk}</p>
          </div>
        </div> 
       ))}
      </div>
     </div>
     {/*Project */}
    </>
  )
}

export default App
