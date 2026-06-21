import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, Linkedin, Mail, FileText, Music2, Pause } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
// ── Spotify UI (prepared for live integration) ──────────────────
// To connect live Spotify data, create a Supabase Edge Function
// that proxies the Spotify Web API /me/player/currently-playing endpoint.
// Pass the access token via env; refresh token stored in Supabase.
// Replace the MOCK_TRACK below with a fetch to that edge function.



function SpotifyCard() {
  const [track, setTrack] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch('/api/spotify');
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();

    const interval = setInterval(fetchTrack, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="glass p-5 flex items-center gap-3">
        <Loader2 size={18} className="animate-spin" />
        <span className="text-sm">Loading Spotify...</span>
      </div>
    );
  }

  if (!track) {
    return (
      <div className="glass p-5">
        Could not load Spotify activity.
      </div>
    );
  }

  return (
    <div
      className="glass p-5 flex items-center gap-4"
      style={{ border: '1px solid rgba(30,215,96,0.2)' }}
    >
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
        {track.albumArt ? (
          <img
            src={track.albumArt}
            alt={track.album}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                'linear-gradient(135deg, #1DB954, #116939)',
            }}
          >
            <Music2 size={20} color="white" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {track.isPlaying ? (
            <>
              <Pause size={10} style={{ color: '#1DB954' }} />
              <span
                className="font-mono text-[10px]"
                style={{ color: '#1DB954' }}
              >
                NOW PLAYING
              </span>
            </>
          ) : (
            <span
              className="font-mono text-[10px]"
              style={{ color: 'var(--text-muted)' }}
            >
              NOT PLAYING
            </span>
          )}
        </div>

        <p
          className="text-sm font-semibold truncate"
          style={{ color: 'var(--text)' }}
        >
          {track.title || 'Nothing Playing'}
        </p>

        <p
          className="text-xs truncate"
          style={{ color: 'var(--text-muted)' }}
        >
          {track.artist || 'Spotify'}
        </p>
      </div>

      <a
        href={track.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.simpleicons.org/spotify/1DB954"
          alt="Spotify"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
}

// ── Connect links ───────────────────────────────────────────────
const CONNECT = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/anu-inu2',                          sub: 'anu-inu2' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aniket-sadawarte/',         sub: 'aniket-sadawarte' },
  { icon: Mail,     label: 'Email',    href: 'mailto:sadawarteaniket686@gmail.com',                   sub: 'sadawarteaniket686@gmail.com' },
  { icon: FileText, label: 'Resume',   href: "/Aniket's_CV.pdf",                                     sub: 'PDF · Updated 2025' },
];

export default function NowPlaying() {
  const { ref, inView } = useInView();

  return (
    <section id="now" ref={ref} className="py-24 px-5 pb-32">
      <div className="max-w-2xl mx-auto">
        {/* Now Playing */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mono-label mb-5"
        >
          now.playing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mb-16"
        >
          <SpotifyCard />
          
        </motion.div>

        {/* Connect */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mono-label mb-5"
        >
          connect
        </motion.p>

        <div className="space-y-3">
          {CONNECT.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : link.href.endsWith('.pdf')
                  ? { download: true }
                  : {})}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.24 + i * 0.06 }}
              className="glass glass-hover flex items-center gap-4 p-5"
              style={{ textDecoration: 'none', cursor: 'none' }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(45,212,191,0.08)', border: '1px solid rgba(45,212,191,0.2)' }}
              >
                <link.icon size={16} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{link.label}</p>
                <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>{link.sub}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center font-mono text-xs mt-16"
          style={{ color: 'var(--text-muted)' }}
        >
          Designed & built by{' '}
          <span style={{ color: 'var(--accent)' }}>Aniket Sadawarte</span>
        </motion.p>
      </div>
    </section>
  );
}
