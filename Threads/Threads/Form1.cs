using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;

namespace Threads
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Temporalizador_Tick(object sender, EventArgs e)
        {
            lblHora.Text = DateTime.Now.ToLongTimeString();
        }

        private Thread hiloSecundario;
        private void btnEjecutar_Click(object sender, EventArgs e)
        {
            //btnEjecutar.Enabled = false;
            //numCargaUCP.Enabled = false;
            //pbProgreso.Value = 0;
            //ThreadStart DelegadoPS = new ThreadStart(TareaSecundariaMethodInvoker);
            //hiloSecundario = new Thread(DelegadoPS);
            //hiloSecundario.Start();

            ////Metodo utilizando componente backgroundworker

            btnEjecutar.Enabled = false;
            numCargaUCP.Enabled = false;
            pbProgreso.Value = 0;

            //hiloTrabajador.RunWorkerAsync();

            //controladorParaHiloSecundario = new ManualResetEvent(false);
            //controladorHiloSecundarioParado = new ManualResetEvent(false);

            //hiloSecundario = new Thread(TareaSecundariaControlHilos);
            //hiloSecundario.Start();
        }

        //Metodo OBJETO THREAD
        private delegate void SetValueDelegateInt(int value);
        //private void SetValue_pbProgreso(int hecho)
        //{
        //    if (pbProgreso.InvokeRequired)
        //    {
        //        SetValueDelegateInt delegado = new SetValueDelegateInt(SetValue_pbProgreso);
        //        pbProgreso.Invoke(delegado, new object[] { hecho });
        //    }
        //    else
        //    {
        //        pbProgreso.Value = hecho;
        //        lblPorcentaje.Text = hecho.ToString()+"%";
        //    }
        //}

        private delegate void SetEnableDelegateBool(bool value);
        private void SetValue_btnEjecutar(bool hecho)
        {
            if (btnEjecutar.InvokeRequired)
            {
                SetEnableDelegateBool delegado = new SetEnableDelegateBool(SetValue_btnEjecutar);
                pbProgreso.Invoke(delegado, new object[] { hecho });
            }
            else
            {
                btnEjecutar.Enabled = hecho;
            }
        }
        private void SetValue_numCargaUCP(bool hecho)
        {
            if (numCargaUCP.InvokeRequired)
            {
                SetEnableDelegateBool delegado = new SetEnableDelegateBool(SetValue_numCargaUCP);
                numCargaUCP.Invoke(delegado, new object[] { hecho });
            }
            else
            {
                numCargaUCP.Enabled = hecho;
            }
        }

        private void TareaSecundariaThread()
        {
            int hecho = 0, tpHecho = 0;

            while (hecho < numCargaUCP.Value)
            {
                hecho += 1;
                tpHecho = (int)(hecho / numCargaUCP.Value * 100);

                if (tpHecho>pbProgreso.Value)
                {
                    SetValue_pbProgreso(tpHecho);
                }
            }

            SetValue_btnEjecutar(true);
            SetValue_numCargaUCP(true);

            MessageBox.Show("Metodo utilizado threads");
        }



        //Metodo OBJERTO METHODINVOKER
        private void SetEnabled_btnEjecutar()
        {
            btnEjecutar.Enabled = true;
        }

        private void SetEnabled_numCargaUCP()
        {
            numCargaUCP.Enabled = true;
        }

        private void SetValue_pbProgreso()
        {
            pbProgreso.Value = tpHecho;
            lblPorcentaje.Text = tpHecho.ToString() + "%";
        }

        public int tpHecho = 0;
        private void TareaSecundariaMethodInvoker()
        {
            MethodInvoker delegado;

            int hecho = 0;
            tpHecho = 0;
            delegado = new MethodInvoker(SetValue_pbProgreso);

            while (hecho < numCargaUCP.Value)
            {
                hecho += 1;
                tpHecho = (int)(hecho / numCargaUCP.Value * 100);

                if (tpHecho > pbProgreso.Value)
                {

                    pbProgreso.Invoke(delegado);

                }

            }

            delegado = new MethodInvoker(SetEnabled_btnEjecutar);
            btnEjecutar.Invoke(delegado);

            delegado = new MethodInvoker(SetEnabled_numCargaUCP);
            numCargaUCP.Invoke(delegado);

            MessageBox.Show("Metodo utilizado OBJETO METHODINVOKER");
        }



        //Metodo utilizando componente Backgrounworker
        private void hiloTrabajador_DoWork(object sender, DoWorkEventArgs e)
        {
            BackgroundWorker hiloTr = (BackgroundWorker)sender;
            TareaSecundariaBGW(hiloTr, e);
        }

        private void TareaSecundariaBGW(BackgroundWorker hiloTR,DoWorkEventArgs e)
        {
            int hecho = 0, tpHecho = 0;

            while (hecho <numCargaUCP.Value)
            {
                hecho += 1;

                tpHecho = (int)(hecho / numCargaUCP.Value * 100);

                if (tpHecho > pbProgreso.Value)
                {
                    hiloTR.ReportProgress(tpHecho);
                }

                //REALIZAR CANCELACION DE LA OPERACION

                if (hiloTR.CancellationPending)
                {
                    e.Cancel = true;
                    break;
                }
                if (hiloTR.CancellationPending)
                {
                    e.Cancel = true;
                    break;
                }
            }
            MessageBox.Show("Metodo utilizando componente backgroundWorker");
        }

        private void hiloTrabajador_ProgressChanged(object sender, ProgressChangedEventArgs e)
        {
            pbProgreso.Value = e.ProgressPercentage;
            lblPorcentaje.Text = e.ProgressPercentage.ToString() + "%";
        }

        private void hiloTrabajador_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            if (e.Error != null)
            {
                MessageBox.Show(e.Error.Message);
            }
            else if(e.Cancelled)
            {
                MessageBox.Show("Operacion cancelada");
                btnEjecutar.Enabled = true;
                numCargaUCP.Enabled = true;
            }
            else
            {
                btnEjecutar.Enabled = true;
                numCargaUCP.Enabled = true;
               
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            //hiloTrabajador.CancelAsync();
            //ParaHiloSecundario();
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            //hiloTrabajador.CancelAsync();
            //ParaHiloSecundario();

        }

        //METODO DETENER HILO DE FORMA CONTROLADA

        //private ManualResetEvent controladorParaHiloSecundario;
        //private ManualResetEvent controladorHiloSecundarioParado;

        //private delegate void SetValueDlegate(int prValue);
        //private delegate void SetEnabledDelegate(bool prEnabled);

        //private void SetValue_pbProgreso(int hecho)
        //{
        //    if (pbProgreso.InvokeRequired)
        //    {
        //        SetValueDlegate delegado = new SetValueDlegate(SetValue_pbProgreso);
        //        pbProgreso.Invoke(delegado, new object[] { hecho });
        //        lblPorcentaje.Invoke(delegado, new object[] { hecho });
        //    }
        //    else
        //    {
        //        pbProgreso.Value = hecho;
        //        lblPorcentaje.Text = hecho.ToString() + "%";
        //    }
        //}

        //private void SetEnabled_btnCalcular(bool b)
        //{
        //    if (btnEjecutar.InvokeRequired)
        //    {
        //        SetEnabledDelegate delegado = new SetEnabledDelegate(SetEnabled_btnCalcular);
        //        btnEjecutar.Invoke(delegado, new object[] { b });
        //    }
        //    else
        //    {
        //        btnEjecutar.Enabled = b;
        //    }
        //}

        //private void SetEnabled_numCarga(bool b)
        //{
        //    if (numCargaUCP.InvokeRequired)
        //    {
        //        SetEnabledDelegate delegado = new SetEnabledDelegate(SetEnabled_numCarga);
        //        numCargaUCP.Invoke(delegado, new object[] { b });
        //    }
        //    else
        //    {
        //        numCargaUCP.Enabled = b;
        //    }
        //}

        //private bool ParaHiloSecundario()
        //{
        //    if (hiloSecundario == null || hiloSecundario.IsAlive)
        //    {
        //        return false;
        //    }

        //    controladorParaHiloSecundario.Set();

        //    while (hiloSecundario.IsAlive)
        //    {
        //        WaitHandle.WaitAll((new ManualResetEvent[] {controladorHiloSecundarioParado}),100,false);
        //        Application.DoEvents();
        //    }

        //    hiloSecundario = null;
        //    return true;
            
        //}
        //private void TareaSecundariaControlHilos()
        //{
        //    int hecho = 0, tpHecho = 0;

        //    while (hecho < numCargaUCP.Value)
        //    {
        //        hecho += 1;
        //        tpHecho = (int)(hecho / numCargaUCP.Value * 100);

        //        if (tpHecho > pbProgreso.Value)
        //        {
        //            SetValue_pbProgreso(tpHecho);
        //        }
        //        if (controladorParaHiloSecundario.WaitOne(0,false))
        //        {
        //            controladorHiloSecundarioParado.Set();
        //            break;
        //        }
        //    }

        //    SetEnabled_btnCalcular(true);
        //    SetEnabled_numCarga(true);

        //    MessageBox.Show("Metodo controlado");
        //}

    }
    
}
