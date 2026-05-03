import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { getPrysmWindowsDownloadConfig } from '@/lib/prysm-download';
import {
  ArrowRight,
  Download,
  ExternalLink,
  MonitorSmartphone,
  ShieldAlert,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function DownloadPage() {
  let config: Awaited<ReturnType<typeof getPrysmWindowsDownloadConfig>> | null =
    null;
  let loadError = '';

  try {
    config = await getPrysmWindowsDownloadConfig();
  } catch (error) {
    loadError =
      error instanceof Error
        ? error.message
        : 'Failed to load the latest release.';
  }

  const steps = [
    'Close Prysm completely.',
    'Download the latest installer from this page.',
    'Run the installer — it upgrades in place.',
    'Reopen Prysm and confirm the new version.',
  ];

  return (
    <>
      {/* Hero */}
      <Section>
        <div className='flex flex-col gap-6 px-6 py-16 md:py-24'>
          <div className='flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground'>
            <MonitorSmartphone className='size-3.5' />
            <span>Windows Installer</span>
          </div>

          <h1 className='max-w-2xl text-left font-regular text-4xl tracking-tighter md:text-6xl'>
            Download Prysm
          </h1>

          <p className='max-w-xl text-lg leading-relaxed text-muted-foreground'>
            Get the latest version of Prysm for Windows. One installer,
            runs over any previous version.
          </p>

          <div className='flex flex-col gap-4 pt-4 sm:flex-row sm:items-center'>
            {config?.available ? (
              <Button
                asChild
                size='lg'
                className='h-12 rounded-full px-8 font-medium'
              >
                <Link href={config.downloadUrl}>
                  <Download className='mr-2 size-4' />
                  Download {config.version && `v${config.version}`}
                </Link>
              </Button>
            ) : (
              <Button
                size='lg'
                className='h-12 rounded-full px-8 font-medium'
                disabled
              >
                <Download className='mr-2 size-4' />
                Download unavailable
              </Button>
            )}

            {config?.releasePageUrl && (
              <Link
                href={config.releasePageUrl}
                className='group flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
              >
                View on GitHub
                <ExternalLink className='size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </Link>
            )}
          </div>

          {!config?.available && (
            <div className='max-w-lg rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive'>
              {loadError ||
                'The latest public GitHub release does not contain a Windows installer asset yet.'}
            </div>
          )}
        </div>
      </Section>

      {/* Info Grid */}
      <Section>
        <div className='border-border border-t border-dashed'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            {/* Version Details */}
            <div className='flex flex-col gap-6 border-border border-b border-dashed p-6 md:border-b-0 md:border-r'>
              <h3 className='text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
                Release Details
              </h3>
              <div className='flex flex-col gap-5'>
                <div>
                  <div className='mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60'>
                    Version
                  </div>
                  <div className='font-mono text-sm'>
                    {config?.version || '—'}
                  </div>
                </div>
                <div>
                  <div className='mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60'>
                    Platform
                  </div>
                  <div className='text-sm'>Windows x64</div>
                </div>
                <div>
                  <div className='mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60'>
                    Package
                  </div>
                  <div className='text-sm'>NSIS Installer (.exe)</div>
                </div>
                <div>
                  <div className='mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60'>
                    Update mode
                  </div>
                  <div className='text-sm'>Manual download</div>
                </div>
              </div>
            </div>

            {/* How to Update */}
            <div className='flex flex-col gap-6 border-border border-b border-dashed p-6 md:border-b-0 md:border-r'>
              <h3 className='text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
                How to Update
              </h3>
              <ol className='flex flex-col gap-4'>
                {steps.map((step, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-sm text-muted-foreground'
                  >
                    <span className='flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-semibold text-background'>
                      {i + 1}
                    </span>
                    <span className='pt-0.5'>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* SmartScreen Note */}
            <div className='flex flex-col gap-6 p-6'>
              <h3 className='text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
                Installer Note
              </h3>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2 text-foreground'>
                  <ShieldAlert className='size-4 text-muted-foreground' />
                  <span className='text-sm font-medium'>
                    Windows SmartScreen
                  </span>
                </div>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  Windows may show a SmartScreen warning on first install
                  because the binary is not yet code-signed. Click{' '}
                  <span className='font-medium text-foreground'>
                    &quot;More info&quot;
                  </span>{' '}
                  → then{' '}
                  <span className='font-medium text-foreground'>
                    &quot;Run anyway&quot;
                  </span>
                  .
                </p>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  Code-signing is planned for a future release.
                </p>
              </div>
              <div className='mt-auto pt-4 border-border border-t border-dashed'>
                <Link
                  href='/contact'
                  className='group flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
                >
                  Need help with installation?
                  <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Typographic Footer Element */}
      <div className='w-full overflow-hidden border-border border-t border-dashed bg-background pt-20 md:pt-32'>
        <div className='container mx-auto flex items-end justify-start px-8 leading-[0.8]'>
          <h2 className='-ml-3 md:-ml-6 text-[22vw] font-medium tracking-tighter text-foreground'>
            Prysm
          </h2>
        </div>
      </div>
    </>
  );
}
