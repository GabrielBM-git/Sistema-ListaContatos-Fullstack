using System;
using System.Linq;
using System.Data;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.EntityFrameworkCore;

using Back_End.Models;

namespace Back_End.Data
{
    public interface IRepository<T> where T : class
    {
        
        T Get(int id);

        IQueryable<T> GetAll();

        //-----------------------------------------------------------------------------------------

        void Post(T entity);
        
        void Put(T entity);
        
        void Delete(T entity);

        //-----------------------------------------------------------------------------------------

        bool Save();
    }
}