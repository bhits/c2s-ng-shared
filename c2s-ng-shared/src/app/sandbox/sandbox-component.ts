export interface SandboxComponent {
  getTemplate(): string;
}
export const TEMPLATE_PREFIX: string =`
<h1>Example</h1>
<pre>{{getTemplate()}}</pre>
<hr>
<h1>Demo</h1>`;
