using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Back_End.Data;
using Back_End.Models;

namespace Back_End.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        //-----------------------------------------------------------------------------------------

        private readonly ILogger<ContatoController> _logger;

        private readonly IRepository<Contato> _repository;

        public ContatoController(ILogger<ContatoController> logger, IRepository<Contato> repository)
        {
            this._logger = logger;

            this._repository = repository;

            this._logger.LogInformation("> Contato [ Controller ]");
        }

        //-----------------------------------------------------------------------------------------

        [HttpGet("Get/{id}")]
        public IActionResult Get(int id)
        {

            this._logger.LogInformation("> Contato [ Get ]");

            //-------------------------------------------------------------------------------------
    
            Contato objeto = null;

            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------
            
                objeto = _repository.Get(id);

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");

                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(objeto); // 200

        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {

            this._logger.LogInformation("> Contato [ GetAll ]");

            //-------------------------------------------------------------------------------------
    
            IList<Contato> objetos = null;

            //-------------------------------------------------------------------------------------

            try
            {
                IQueryable<Contato> query = _repository.GetAll();

                //---------------------------------------------------------------------------------
                
                query = query.OrderBy(q => q.Nome);

                //---------------------------------------------------------------------------------

                objetos = query.ToList();

            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");

                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(objetos); // 200

        }

        [HttpGet("GetAll_ClienteId/{id}")]
        public IActionResult GetAll_ClienteId(int id)
        {

            this._logger.LogInformation("> Contato [ GetAll_ClienteId ]");

            //-------------------------------------------------------------------------------------
    
            IList<Contato> objetos = null;

            //-------------------------------------------------------------------------------------

            try
            {
                IQueryable<Contato> query = _repository.GetAll();

                //---------------------------------------------------------------------------------
                
                query = query.Where(q => q.ClienteId == id);

                query = query.OrderBy(q => q.Nome);

                //---------------------------------------------------------------------------------

                objetos = query.ToList();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");

                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(objetos); // 200

        }

        [HttpGet("GetAll_NotCliente")]
        public IActionResult GetAll_NotCliente()
        {

            this._logger.LogInformation("> Contato [ GetAll_NotCliente ]");

            //-------------------------------------------------------------------------------------
    
            IList<Contato> objetos = null;

            //-------------------------------------------------------------------------------------

            try
            {
                IQueryable<Contato> query = _repository.GetAll();

                //---------------------------------------------------------------------------------
                
                query = query.Where(q => q.ClienteId == 0);

                query = query.OrderBy(q => q.Nome);

                //---------------------------------------------------------------------------------

                objetos = query.ToList();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");

                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(objetos); // 200

        }

        //-----------------------------------------------------------------------------------------

        [HttpPost("Post")]
        public IActionResult Post(Contato contato)
        {

            this._logger.LogInformation("> Contato [ Post ]");

            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------
               
                _repository.Post(contato);

                _repository.Save();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(contato); // 200

        }

        [HttpPut("Put")]
        public IActionResult Put(Contato contato)
        {

            this._logger.LogInformation("> Contato [ Put ]");

            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------
                
                _repository.Put(contato);

                _repository.Save();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(contato); // 200

        }

        [HttpDelete("Delete")]
        public IActionResult Delete(Contato contato)
        {

            this._logger.LogInformation("> Contato [ Delete ]");

            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------
                
                _repository.Delete(contato);

                _repository.Save();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(contato); // 200

        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {

            this._logger.LogInformation("> Contato [ Delete/{Id} ]");

            //-------------------------------------------------------------------------------------

            Contato contato = null;

            //-------------------------------------------------------------------------------------
            
            try
            {
                contato = _repository.Get(id);

                //---------------------------------------------------------------------------------
                
                if(contato != null)
                {
                    _repository.Delete(contato);

                    _repository.Save();
                }

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Contato [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(contato); // 200

        }

        //-----------------------------------------------------------------------------------------
    }
}