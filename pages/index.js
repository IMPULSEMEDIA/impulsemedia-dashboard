export default function Home() {
  return (
    <div style={{
      background:"#000",
      color:"#fff",
      minHeight:"100vh",
      padding:"40px",
      fontFamily:"Arial"
    }}>
      <h1>🔥 IMPULSEMEDIA</h1>

      <p>Analytics 24/7 para YouTube, Spotify y TikTok</p>

      <div style={{
        background:"#111",
        padding:"20px",
        borderRadius:"12px",
        marginTop:"20px"
      }}>
        <h2>Total Views</h2>
        <h1>1.4M</h1>
      </div>

      <div style={{
        background:"#111",
        padding:"20px",
        borderRadius:"12px",
        marginTop:"20px"
      }}>
        <h2>Top Country</h2>
        <h1>Perú</h1>
      </div>

      <div style={{
        background:"#111",
        padding:"20px",
        borderRadius:"12px",
        marginTop:"20px"
      }}>
        <h2>Platforms</h2>

        <ul>
          <li>YouTube</li>
          <li>Spotify</li>
          <li>TikTok</li>
        </ul>
      </div>
    </div>
  );
}
