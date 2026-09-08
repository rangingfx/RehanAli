export function generateVCard(): string {
  return `BEGIN:VCARD
VERSION:3.0
N:Ali;Rehan;;;
FN:Rehan Ali
ORG:Embroidery & Textile Production
TITLE:Senior Embroidery Machine Operator & Mechanical Master
TEL;TYPE=CELL,VOICE:+923223988933
TEL;TYPE=CELL,VOICE:+923334130171
URL:https://rehanali.rangingfx.com/
NOTE:10+ Years Experience in computerized embroidery machines, mechanical maintenance, and textile production. Collaborated with Maria.B, Outfitters, Bareeze.
END:VCARD`;
}

export function downloadVCard(): void {
  const vcardText = generateVCard();
  const blob = new Blob([vcardText], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Rehan_Ali_Embroidery_Master.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
