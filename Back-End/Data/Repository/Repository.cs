using System;
using System.Linq;
using System.Data;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.EntityFrameworkCore;

using Back_End.Models;

namespace Back_End.Data
{
    public class Repository<T> : IDisposable, IRepository<T> where T : class
    {

        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }

        //-----------------------------------------------------------------------------------------

        public T Get(int id)
        {
            return _context.Set<T>().Find(id);
        }

        public IQueryable<T> GetAll()
        {
            return _context.Set<T>();
        }

        //-----------------------------------------------------------------------------------------

        public void Post(T entity)
        {
            _context.Add(entity);
        }

        public void Put(T entity)
        {
            _context.Update(entity);
        }

        public void Delete(T entity)
        {
            _context.Remove(entity);
        }

        //-----------------------------------------------------------------------------------------

        public bool Save()
        {
            return (_context.SaveChanges()) > 0;
        }

        //-----------------------------------------------------------------------------------------

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}