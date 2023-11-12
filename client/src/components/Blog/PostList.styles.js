const styles = {
    outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
    mainContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '20px',
    padding: '20px',
    justifyContent: 'space-around',
  },
  postContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #0098CA',
    borderRadius: '4px',
    margin: '10px',
    maxWidth: '300px',
    minHeight: '350px',
    padding: '10px',
    height: '100%',
  },
  postTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
    height: '64px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  postSummary: {
    fontSize: '14px',
    textAlign: 'justify',
    marginBottom: '10px',
  },
  postCategory: {
    fontStyle: 'italic',
    marginBottom: '5px',
  },
  postDate: {
    fontWeight: 'bold',
    fontSize: '12px',
    color: '#0098CA',
  },

  postTop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  postBottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  starContainer: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
};

export default styles;