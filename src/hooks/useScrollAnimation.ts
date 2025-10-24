import { useEffect, useRef } from 'react';

/**
 * Hook customizado para animações ao fazer scroll
 * Substitui Framer Motion com Intersection Observer + CSS animations
 *
 * @param threshold - Porcentagem do elemento visível para triggar animação (0-1)
 * @param animationClass - Classe CSS da animação a ser aplicada
 * @returns ref - Referência para anexar ao elemento
 */
export const useScrollAnimation = (
  threshold: number = 0.1,
  animationClass: string = 'animate-on-scroll'
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          // Desconectar após animar (performance)
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Trigga um pouco antes
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, animationClass]);

  return ref;
};

/**
 * Hook para múltiplos elementos (ex: lista de cards)
 */
export const useScrollAnimationMultiple = (
  count: number,
  threshold: number = 0.1,
  staggerDelay: number = 100 // ms entre cada elemento
) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((element, index) => {
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Aplica delay escalonado
            setTimeout(() => {
              entry.target.classList.add('animate-on-scroll');
            }, index * staggerDelay);

            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [count, threshold, staggerDelay]);

  return refs;
};
