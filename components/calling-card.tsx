import { Mail } from 'lucide-react'
import { profile } from '@/lib/profile'

export function CallingCard() {
  return (
    <article className="w-full max-w-md overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xl shadow-blue-900/5">
      <div className="h-2 bg-blue-600" aria-hidden="true" />
      <div className="flex flex-col gap-8 p-8 sm:p-10">
        <header className="flex flex-col gap-3">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900">
            My Personal Info
          </h1>
          <p className="text-xl font-medium text-slate-900">{profile.name}</p>
          <p className="text-lg font-medium text-blue-700">{profile.role}</p>
          <p className="text-pretty leading-relaxed text-slate-600">
            {profile.school}
            <span className="mx-2 text-blue-300" aria-hidden="true">
              {'/'}
            </span>
            {profile.graduation}
          </p>
        </header>

        <section aria-labelledby="involvement-heading" className="flex flex-col gap-2 border-t border-slate-100 pt-6">
          <h2 id="involvement-heading" className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Involvement
          </h2>
          <p className="text-pretty leading-relaxed text-slate-700">{profile.involvement}</p>
        </section>

        <section aria-labelledby="contact-heading" className="flex flex-col gap-3 border-t border-slate-100 pt-6">
          <h2 id="contact-heading" className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </h2>
          <ul className="flex flex-col gap-2">
            {profile.emails.map((email) => (
              <li key={email.label}>
                {email.address ? (
                  <a
                    href={`mailto:${email.address}`}
                    className="flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 text-slate-800 transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <Mail className="size-4 shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="flex flex-col">
                      <span className="text-xs text-slate-500">{email.label}</span>
                      <span className="break-all font-medium">{email.address}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 rounded-lg border border-dashed border-blue-200 px-4 py-3">
                    <Mail className="size-4 shrink-0 text-blue-300" aria-hidden="true" />
                    <span className="flex flex-col">
                      <span className="text-xs text-slate-500">{email.label}</span>
                      <span className="text-sm text-slate-400">Not added yet</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
