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
    public class ClienteController : ControllerBase
    {
        //-----------------------------------------------------------------------------------------

        private readonly ILogger<ClienteController> _logger;

        private readonly IRepository<Cliente> _repository;

        public ClienteController(ILogger<ClienteController> logger, IRepository<Cliente> repository)
        {
            this._logger = logger;

            this._repository = repository;

            this._logger.LogInformation("> Cliente [ Controller ]");
        }

        //-----------------------------------------------------------------------------------------

        [HttpGet("Get/{id}")]
        public IActionResult Get(int id)
        {

            this._logger.LogInformation("> Cliente [ Get ]");

            //-------------------------------------------------------------------------------------
    
            Cliente objeto = null;

            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------
            
                objeto = _repository.Get(id);

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Cliente [ Error ]");

                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(objeto); // 200

        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {

            this._logger.LogInformation("> Cliente [ GetAll ]");

            //-------------------------------------------------------------------------------------
    
            IList<Cliente> objetos = null;

            //-------------------------------------------------------------------------------------

            try
            {
                IQueryable<Cliente> query = _repository.GetAll();

                //---------------------------------------------------------------------------------
                
                query = query.OrderBy(q => q.Nome);

                //---------------------------------------------------------------------------------

                objetos = query.ToList();

            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Cliente [ Error ]");

                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(objetos); // 200

        }

        //-----------------------------------------------------------------------------------------

        [HttpPost("Post")]
        public IActionResult Post(Cliente cliente)
        {

            this._logger.LogInformation("> Cliente [ Post ]");

            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------
                
                _repository.Post(cliente);

                _repository.Save();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Cliente [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(cliente); // 200

        }

        [HttpPut("Put")]
        public IActionResult Put(Cliente cliente)
        {

            this._logger.LogInformation("> Cliente [ Put ]");

            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------

                _repository.Put(cliente);

                _repository.Save();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Cliente [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(cliente); // 200

        }

        [HttpDelete("Delete")]
        public IActionResult Delete(Cliente cliente)
        {

            this._logger.LogInformation("> Cliente [ Delete ]");
            
            //-------------------------------------------------------------------------------------

            try
            {
                //---------------------------------------------------------------------------------
                
                _repository.Delete(cliente);

                _repository.Save();

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Cliente [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(cliente); // 200

        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {

            this._logger.LogInformation("> Cliente [ Delete/{Id} ]");
            
            //-------------------------------------------------------------------------------------

            Cliente cliente = null;

            //-------------------------------------------------------------------------------------

            try
            {
                cliente = _repository.Get(id);

                //---------------------------------------------------------------------------------
                
                if(cliente != null)
                {
                    _repository.Delete(cliente);

                    _repository.Save();
                }

                //---------------------------------------------------------------------------------
            }
            catch (Exception err)
            {
                this._logger.LogInformation("> Cliente [ Error ]");
                
                return BadRequest("{ \"erro\": \"" + err.Message + "\" }"); // 400
            }

            //-------------------------------------------------------------------------------------
                    
            return Ok(cliente); // 200

        }

        //-----------------------------------------------------------------------------------------
    }
}