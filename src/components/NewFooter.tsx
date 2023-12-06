'use client';
import { URLs } from '@/lib/constants';
import Link from 'next/link';
import Logo from './ui/logo';

export default function NewFooter() {
  return (
    <>
      <footer className="mt-4 border-t border-gray-700">
        <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
          <div className="flex flex-col gap-y-4 sm:items-center sm:justify-between lg:flex-row">
            <Link href="/" className="text-2xl font-semibold">
              <Logo />
            </Link>

            <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
              <li>
                <Link
                  href={URLs.privacyPolicy}
                  className="me-4 hover:underline md:me-6"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href={URLs.termsOfService} className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <span className="flex items-center justify-center py-2">
            <span className="text-sm text-accent-foreground">
              © {new Date().getFullYear()} Powered by{' '}
              <Link
                href="https://www.youtube.com/@AI.Overpowered"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand"
              >
                Overpowered
              </Link>
            </span>
          </span>
        </div>
      </footer>
    </>
  );
}