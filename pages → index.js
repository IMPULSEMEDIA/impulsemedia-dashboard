export default function Home() {
  const links = [
    { name: "YouTube Track 1", views: "124K", country: "Perú" },
    { name: "Spotify Track 1", views: "89K", country: "México" },
    { name: "TikTok Viral", views: "1.2M", country: "España" },
  ];

  return (
    <div style={{ padding: 30, fontFamily: "Arial", background: "#0a0a0a", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 40 }}>🔥 IMPULSEMEDIA</h1>
      <p>Analytics 24/7 de YouTube, Spotify y TikTok</p>

      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <div style={{ padding: 20, background: "#111", borderRadius: 10 }}>
          <h3>Views Totales</h3>
          <h2>1.4M</h2>
        </div>

        <div style={{ padding: 20, background: "#111", borderRadius: 10 }}>
          <h3>Clicks</h3>
          <h2>103K</h2>
        </div>

        <div style={{ padding: 20, background: "#111", borderRadius: 10 }}>
          <h3>Top País</h3>
          <h2>Perú</h2>
        </div>
      </div>

      <h2 style={{ marginTop: 40 }}>Links Tracking</h2>

      {links.map((l, i) => (
        <div key={i} style={{ background: "#111", padding: 15, marginTop: 10, borderRadius: 10 }}>
          <h3>{l.name}</h3>
          <p>Views: {l.views}</p>
          <p>País: {l.country}</p>
        </div>
      ))}
    </div>
  );
}
