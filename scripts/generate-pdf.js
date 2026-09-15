import fs from 'fs';
import path from 'path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

async function createCVPdf() {
  const pdfDoc = await PDFDocument.create();
  
  // Embed standard fonts
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // A4 dimensions: 595.28 x 841.89 points
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 36;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const darkNavy = rgb(15 / 255, 23 / 255, 42 / 255); // #0f172a
  const amberGold = rgb(217 / 255, 119 / 255, 6 / 255); // #d97706
  const slateDark = rgb(51 / 255, 65 / 255, 85 / 255); // #334155
  const slateMuted = rgb(100 / 255, 116 / 255, 139 / 255); // #64748b
  const slateLight = rgb(241 / 255, 245 / 255, 249 / 255); // #f1f5f9
  const borderGrey = rgb(226 / 255, 232 / 255, 240 / 255); // #e2e8f0

  // ==========================================
  // PAGE 1: Executive Profile & Experience
  // ==========================================
  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  // Header Banner Background
  const bannerHeight = 84;
  page.drawRectangle({
    x: margin,
    y: y - bannerHeight,
    width: contentWidth,
    height: bannerHeight,
    color: darkNavy,
    borderRadius: 8,
  });

  // Name & Title in Banner
  page.drawText('REHAN ALI', {
    x: margin + 16,
    y: y - 28,
    size: 20,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('SENIOR EMBROIDERY MACHINE OPERATOR & MECHANICAL MASTER', {
    x: margin + 16,
    y: y - 46,
    size: 9.5,
    font: fontBold,
    color: amberGold,
  });

  page.drawText('10+ Years Industrial Experience  |  Multi-Head Computerized Embroidery Machinery Specialist', {
    x: margin + 16,
    y: y - 62,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.85, 0.88, 0.92),
  });

  y -= (bannerHeight + 12);

  // Contact Info Ribbon
  page.drawRectangle({
    x: margin,
    y: y - 24,
    width: contentWidth,
    height: 24,
    color: slateLight,
    borderColor: borderGrey,
    borderWidth: 1,
  });

  const contactText = 'Tel: +92 322 39 88 933 / +92 333 41 30 171   |   Lahore, Pakistan   |   Portfolio: https://rehanali.rangingfx.com';
  page.drawText(contactText, {
    x: margin + 12,
    y: y - 16,
    size: 8,
    font: fontRegular,
    color: slateDark,
  });

  y -= 36;

  // Helper function for section headings
  function drawSectionHeading(title, yPos) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: yPos,
      size: 11,
      font: fontBold,
      color: darkNavy,
    });
    page.drawLine({
      start: { x: margin, y: yPos - 4 },
      end: { x: margin + contentWidth, y: yPos - 4 },
      thickness: 1.5,
      color: amberGold,
    });
    return yPos - 18;
  }

  // Helper function to wrap text
  function drawWrappedText(text, x, startY, maxWidth, fontSize, font, color, lineHeight = 12) {
    const words = text.split(' ');
    let line = '';
    let currentY = startY;

    for (const word of words) {
      const testLine = line + (line ? ' ' : '') + word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxWidth && line !== '') {
        page.drawText(line, { x, y: currentY, size: fontSize, font, color });
        line = word;
        currentY -= lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x, y: currentY, size: fontSize, font, color });
      currentY -= lineHeight;
    }
    return currentY;
  }

  // 1. PROFESSIONAL SUMMARY
  y = drawSectionHeading('Professional Summary', y);
  const summary = 'Dedicated and highly skilled Embroidery Machine Operator and Mechanical Master with over a decade of continuous hands-on experience (dating back to 2011) in industrial textile and apparel manufacturing. Master-level operational command across computerized multi-head machinery (Yuemei, SWM, Humble, AA Champion, Great, and Pro Maker). Renowned for precise 0.05mm rotary hook timing calibration, upper/bobbin thread tension balancing, rapid mechanical troubleshooting, zero-skipped-stitch quality control, and seamless mass production for premier export and designer brands.';
  y = drawWrappedText(summary, margin, y, contentWidth, 8.5, fontRegular, slateDark, 12);
  y -= 8;

  // 2. INDUSTRIAL MACHINERY MASTERED
  y = drawSectionHeading('Computerized Machinery Mastery', y);
  
  const machines = [
    { name: 'Yuemei', tier: 'Budget / Industrial', desc: 'Dahao computer controls, multi-head speed tuning & rapid thread loop calibration.' },
    { name: 'SWM', tier: 'Industrial Embroidery', desc: 'Heavy-duty multi-needle setups, structural frame balance & high-output shift operations.' },
    { name: 'Humble', tier: 'Commercial Systems', desc: 'Commercial embroidery execution, zero-break tension calibration & delicate fabric handling.' },
    { name: 'AA Champion', tier: 'Heavy-Duty Industrial', desc: 'High-speed vibration dampening, electronic trimmer calibration & dense stitch density.' },
    { name: 'Great', tier: 'Multi-Head Production', desc: 'Multi-head production synchronization, multi-color sequencing & mechanical maintenance.' },
    { name: 'Pro Maker', tier: 'Industrial Precision', desc: 'Advanced computerized timing alignment, needle bar height adjustment & preventative care.' },
  ];

  // 2-column grid for machines
  const colWidth = (contentWidth - 12) / 2;
  let gridY = y;
  machines.forEach((m, idx) => {
    const colX = margin + (idx % 2) * (colWidth + 12);
    const itemY = gridY - Math.floor(idx / 2) * 34;

    page.drawRectangle({
      x: colX,
      y: itemY - 26,
      width: colWidth,
      height: 28,
      color: slateLight,
      borderColor: borderGrey,
      borderWidth: 0.5,
    });

    page.drawText(`${m.name}`, {
      x: colX + 8,
      y: itemY - 10,
      size: 9,
      font: fontBold,
      color: darkNavy,
    });

    page.drawText(`[${m.tier}]`, {
      x: colX + 70,
      y: itemY - 10,
      size: 7.5,
      font: fontOblique,
      color: amberGold,
    });

    page.drawText(m.desc, {
      x: colX + 8,
      y: itemY - 21,
      size: 7,
      font: fontRegular,
      color: slateMuted,
    });
  });

  y = gridY - Math.ceil(machines.length / 2) * 34 - 10;

  // 3. CORE TECHNICAL COMPETENCIES (3 Columns)
  y = drawSectionHeading('Core Technical Competencies', y);
  
  const skillCols = [
    {
      title: 'Mechanical Calibration',
      points: [
        '0.05mm Rotary hook timing',
        'Needle-to-hook clearance',
        'Needle bar height calibration',
        'Driver & reciprocator repair',
      ],
    },
    {
      title: 'Tension & Operation',
      points: [
        'Upper & bobbin tension tuning',
        'Zero-loop & zero-breakage SOP',
        'Dahao computerized panels',
        'Multi-head synchronization',
      ],
    },
    {
      title: 'Fabric & Quality Control',
      points: [
        'Lawn, Chiffon, Silk & Velvet',
        'Stabilizer & backing selection',
        '100% zero-defect inspection',
        'Preventive shift maintenance',
      ],
    },
  ];

  const skillColWidth = (contentWidth - 16) / 3;
  skillCols.forEach((col, idx) => {
    const colX = margin + idx * (skillColWidth + 8);
    let sY = y;

    page.drawText(col.title, {
      x: colX,
      y: sY,
      size: 8.5,
      font: fontBold,
      color: darkNavy,
    });
    sY -= 12;

    col.points.forEach((pt) => {
      page.drawText(`• ${pt}`, {
        x: colX,
        y: sY,
        size: 7.5,
        font: fontRegular,
        color: slateDark,
      });
      sY -= 10.5;
    });
  });

  y -= 62;

  // 4. PROFESSIONAL WORK EXPERIENCE
  y = drawSectionHeading('Work Experience & Production History', y);

  const jobs = [
    {
      role: 'Senior Embroidery Machine Operator & Mechanical Master',
      company: 'Bilal Textile / Shaner',
      dates: '2020 – PRESENT | LAHORE, PAKISTAN',
      bullets: [
        'Commanding shift operations across multi-head computerized embroidery machines running 800 - 1,050 SPM.',
        'Directing mechanical maintenance, rotary hook 0.05mm timing alignment, and daily preventative servicing.',
        'Executed export and luxury collections with zero skipped stitches, reducing machine downtime by 35%.',
      ],
    },
    {
      role: 'Embroidery Machine Technician & Operator',
      company: 'Bareeze / Sefam Production Unit',
      dates: '2016 – 2020 | LAHORE, PAKISTAN',
      bullets: [
        'Operated high-end multi-head embroidery systems for Bareeze signature designer lawn, silk, and chiffon.',
        'Calibrated delicate tension balancing to eliminate puckering and fabric distortion on sheer luxury textiles.',
        'Trained and supervised 8+ junior operators in machine setup, bobbin changing, and error diagnostics.',
      ],
    },
    {
      role: 'Multi-Head Embroidery Machine Operator',
      company: 'Maria.B & Outfitters Apparel Production',
      dates: '2013 – 2016 | LAHORE, PAKISTAN',
      bullets: [
        'Produced high-volume seasonal collections for top retail fashion labels under strict production deadlines.',
        'Monitored 12+ embroidery heads concurrently, identifying needle burrs, thread slippage, and mechanical alarms.',
      ],
    },
    {
      role: 'Mechanical Apprentice & Junior Machine Operator',
      company: 'Master Embroidery Works',
      dates: '2011 – 2013 | LAHORE, PAKISTAN',
      bullets: [
        'Completed rigorous 2-year hands-on technical apprenticeship under senior master mechanics.',
        'Mastered rotary hook disassembly, needle bar alignment, bobbin tensioning, and electronic panel operation.',
      ],
    },
  ];

  jobs.forEach((job) => {
    // Check remaining page space
    if (y < margin + 60) {
      // Create second page if needed
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin - 10;
      y = drawSectionHeading('Work Experience & Qualifications (Continued)', y);
    }

    page.drawText(job.role, {
      x: margin,
      y,
      size: 9,
      font: fontBold,
      color: darkNavy,
    });

    const datesWidth = fontBold.widthOfTextAtSize(job.dates, 7.5);
    page.drawText(job.dates, {
      x: margin + contentWidth - datesWidth,
      y,
      size: 7.5,
      font: fontBold,
      color: amberGold,
    });
    y -= 11;

    page.drawText(job.company, {
      x: margin,
      y,
      size: 8,
      font: fontOblique,
      color: slateMuted,
    });
    y -= 11;

    job.bullets.forEach((bullet) => {
      page.drawText(`-  ${bullet}`, {
        x: margin + 6,
        y,
        size: 7.5,
        font: fontRegular,
        color: slateDark,
      });
      y -= 10;
    });

    y -= 5;
  });

  // 5. EDUCATION & VERIFICATION FOOTER
  y -= 4;
  page.drawRectangle({
    x: margin,
    y: y - 36,
    width: contentWidth,
    height: 36,
    color: darkNavy,
    borderRadius: 6,
  });

  page.drawText('EDUCATION: Matriculation in Science (Albadr Public School)  |  Vocational Mechanical Apprenticeship (2011)', {
    x: margin + 12,
    y: y - 14,
    size: 7.5,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText('Official verified CV of Rehan Ali  •  Available for immediate hiring discussions  •  Tel: +92 322 39 88 933 / +92 333 41 30 171', {
    x: margin + 12,
    y: y - 27,
    size: 7,
    font: fontRegular,
    color: rgb(0.85, 0.88, 0.92),
  });

  // Save PDF to public folder
  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'Rehan-Ali-CV.pdf');
  const outputPathFull = path.join(process.cwd(), 'public', 'Rehan-Ali-Senior-Embroidery-Machine-Operator-CV.pdf');
  
  fs.writeFileSync(outputPath, pdfBytes);
  fs.writeFileSync(outputPathFull, pdfBytes);
  console.log('PDF generated successfully at:', outputPath);
}

createCVPdf().catch(console.error);
