
namespace Threads
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.lblHora = new System.Windows.Forms.Label();
            this.btnEjecutar = new System.Windows.Forms.Button();
            this.pbProgreso = new System.Windows.Forms.ProgressBar();
            this.numCargaUCP = new System.Windows.Forms.NumericUpDown();
            this.lblPorcentaje = new System.Windows.Forms.Label();
            this.Temporalizador = new System.Windows.Forms.Timer(this.components);
            this.hiloTrabajador = new System.ComponentModel.BackgroundWorker();
            this.btnCancel = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.numCargaUCP)).BeginInit();
            this.SuspendLayout();
            // 
            // lblHora
            // 
            this.lblHora.AutoSize = true;
            this.lblHora.Font = new System.Drawing.Font("Segoe UI Black", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.lblHora.Location = new System.Drawing.Point(56, 21);
            this.lblHora.Name = "lblHora";
            this.lblHora.Size = new System.Drawing.Size(104, 21);
            this.lblHora.TabIndex = 0;
            this.lblHora.Text = "00:00:00am";
            // 
            // btnEjecutar
            // 
            this.btnEjecutar.Location = new System.Drawing.Point(113, 102);
            this.btnEjecutar.Name = "btnEjecutar";
            this.btnEjecutar.Size = new System.Drawing.Size(75, 23);
            this.btnEjecutar.TabIndex = 1;
            this.btnEjecutar.Text = "Ejecutar";
            this.btnEjecutar.UseVisualStyleBackColor = true;
            this.btnEjecutar.Click += new System.EventHandler(this.btnEjecutar_Click);
            // 
            // pbProgreso
            // 
            this.pbProgreso.Location = new System.Drawing.Point(31, 73);
            this.pbProgreso.Name = "pbProgreso";
            this.pbProgreso.Size = new System.Drawing.Size(157, 23);
            this.pbProgreso.TabIndex = 2;
            // 
            // numCargaUCP
            // 
            this.numCargaUCP.Increment = new decimal(new int[] {
            50000,
            0,
            0,
            0});
            this.numCargaUCP.Location = new System.Drawing.Point(40, 131);
            this.numCargaUCP.Maximum = new decimal(new int[] {
            705032704,
            1,
            0,
            0});
            this.numCargaUCP.Name = "numCargaUCP";
            this.numCargaUCP.Size = new System.Drawing.Size(120, 23);
            this.numCargaUCP.TabIndex = 3;
            this.numCargaUCP.Value = new decimal(new int[] {
            50000,
            0,
            0,
            0});
            // 
            // lblPorcentaje
            // 
            this.lblPorcentaje.AutoSize = true;
            this.lblPorcentaje.Location = new System.Drawing.Point(156, 55);
            this.lblPorcentaje.Name = "lblPorcentaje";
            this.lblPorcentaje.Size = new System.Drawing.Size(32, 15);
            this.lblPorcentaje.TabIndex = 4;
            this.lblPorcentaje.Text = "0.0%";
            // 
            // Temporalizador
            // 
            this.Temporalizador.Enabled = true;
            this.Temporalizador.Interval = 1;
            this.Temporalizador.Tick += new System.EventHandler(this.Temporalizador_Tick);
            // 
            // hiloTrabajador
            // 
            this.hiloTrabajador.WorkerReportsProgress = true;
            this.hiloTrabajador.WorkerSupportsCancellation = true;
            this.hiloTrabajador.DoWork += new System.ComponentModel.DoWorkEventHandler(this.hiloTrabajador_DoWork);
            this.hiloTrabajador.ProgressChanged += new System.ComponentModel.ProgressChangedEventHandler(this.hiloTrabajador_ProgressChanged);
            this.hiloTrabajador.RunWorkerCompleted += new System.ComponentModel.RunWorkerCompletedEventHandler(this.hiloTrabajador_RunWorkerCompleted);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(31, 102);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(75, 23);
            this.btnCancel.TabIndex = 5;
            this.btnCancel.Text = "Cancelar";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(216, 185);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.lblPorcentaje);
            this.Controls.Add(this.numCargaUCP);
            this.Controls.Add(this.pbProgreso);
            this.Controls.Add(this.btnEjecutar);
            this.Controls.Add(this.lblHora);
            this.Name = "Form1";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form1_FormClosing);
            ((System.ComponentModel.ISupportInitialize)(this.numCargaUCP)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblHora;
        private System.Windows.Forms.Button btnEjecutar;
        private System.Windows.Forms.ProgressBar pbProgreso;
        private System.Windows.Forms.NumericUpDown numCargaUCP;
        private System.Windows.Forms.Label lblPorcentaje;
        private System.Windows.Forms.Timer Temporalizador;
        private System.ComponentModel.BackgroundWorker hiloTrabajador;
        private System.Windows.Forms.Button btnCancel;
    }
}

