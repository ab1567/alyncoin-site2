export default function GalleryPage() {
  const images = [
    'image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png',
    'image7.png', 'image8.png', 'image9.png', 'image10.png', 'image11.png', 'image12.png',
    'image13.png', 'image16.png', 'image17.png'
  ];

  return (
    <div className="section max-w-6xl mx-auto">
      <h1 className="section-title text-center mb-8">Media Gallery</h1>
      <p className="text-gray-300 text-center mb-12">
        A collection of artwork and conceptual visuals from the AlynCoin project.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img} className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg">
            <img src={`/assets/${img}`} alt={img.replace('.png', '')} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
